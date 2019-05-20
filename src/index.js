export default function trimCanvas (canvas, options = {}) {
  const {clone} = options
  const context = canvas.getContext('2d')

  const imgWidth = canvas.width
  const imgHeight = canvas.height

  const imgData = context.getImageData(0, 0, imgWidth, imgHeight).data

  // get the corners of the relevant content (everything that's not white)
  const cropTop = scanY(true, imgWidth, imgHeight, imgData)
  const cropBottom = scanY(false, imgWidth, imgHeight, imgData)
  const cropLeft = scanX(true, imgWidth, imgHeight, imgData)
  const cropRight = scanX(false, imgWidth, imgHeight, imgData)

  // + 1 is needed because this is a difference, there are n + 1 pixels in
  // between the two numbers inclusive
  const cropXDiff = (cropRight - cropLeft) + 1
  const cropYDiff = (cropBottom - cropTop) + 1

  // get the relevant data from the calculated coordinates
  const trimmedData = context.getImageData(cropLeft, cropTop, cropXDiff,
    cropYDiff)

  // early return if cloning
  if (clone) {
    const copy = document.createElement('canvas')
    copy.width = cropXDiff
    copy.height = cropYDiff
    copy.getContext('2d').putImageData(trimmedData, 0, 0)
    return copy
  }

  // set the trimmed width and height
  canvas.width = cropXDiff
  canvas.height = cropYDiff
  // clear the canvas
  context.clearRect(0, 0, cropXDiff, cropYDiff)
  // place the trimmed data into the cleared canvas to create
  // a new, trimmed canvas
  context.putImageData(trimmedData, 0, 0)
  return canvas // for chaining
}

// returns the RGBA values of an x, y coord of imgData
function getRGBA (x, y, imgWidth, imgData) {
  return {
    red: imgData[(imgWidth * y + x) * 4],
    green: imgData[(imgWidth * y + x) * 4 + 1],
    blue: imgData[(imgWidth * y + x) * 4 + 2],
    alpha: imgData[(imgWidth * y + x) * 4 + 3]
  }
}

function getAlpha (x, y, imgWidth, imgData) {
  return getRGBA(x, y, imgWidth, imgData).alpha
}

// finds the first y coord in imgData that is not white
function scanY (fromTop, imgWidth, imgHeight, imgData) {
  const offset = fromTop ? 1 : -1
  const firstCol = fromTop ? 0 : imgHeight - 1

  // loop through each row
  for (let y = firstCol; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
    // loop through each column
    for (let x = 0; x < imgWidth; x++) {
      // if not white, return col
      if (getAlpha(x, y, imgWidth, imgData)) {
        return y
      }
    }
  }

  // the whole image is white already
  return null
}

// finds the first x coord in imgData that is not white
function scanX (fromLeft, imgWidth, imgHeight, imgData) {
  const offset = fromLeft ? 1 : -1
  const firstRow = fromLeft ? 0 : imgWidth - 1

  // loop through each column
  for (let x = firstRow; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
    // loop through each row
    for (let y = 0; y < imgHeight; y++) {
      // if not white, return row
      if (getAlpha(x, y, imgWidth, imgData)) {
        return x
      }
    }
  }

  // the whole image is white already
  return null
}
