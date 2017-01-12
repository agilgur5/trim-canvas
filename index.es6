export default function trimCanvas (canvas) {
  let context = canvas.getContext('2d')

  let imgWidth = canvas.width
  let imgHeight = canvas.height

  let imgData = context.getImageData(0, 0, imgWidth, imgHeight).data

  // get the corners of the relevant content (everything that's not white)
  let cropTop = scanY(true, imgWidth, imgHeight, imgData)
  let cropBottom = scanY(false, imgWidth, imgHeight, imgData)
  let cropLeft = scanX(true, imgWidth, imgHeight, imgData)
  let cropRight = scanX(false, imgWidth, imgHeight, imgData)

  // + 1 is needed because this is a difference, there are n + 1 pixels in
  // between the two numbers inclusive
  let cropXDiff = (cropRight - cropLeft) + 1
  let cropYDiff = (cropBottom - cropTop) + 1

  // get the relevant data from the calculated coordinates
  let trimmedData = context.getImageData(cropLeft, cropTop, cropXDiff,
    cropYDiff)

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
  let offset = fromTop ? 1 : -1
  let firstCol = fromTop ? 0 : imgHeight - 1

  // loop through each row
  for (var y = firstCol; fromTop ? (y < imgHeight) : (y > -1); y += offset) {
    // loop through each column
    for (var x = 0; x < imgWidth; x++) {
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
  let offset = fromLeft ? 1 : -1
  let firstRow = fromLeft ? 0 : imgWidth - 1

  // loop through each column
  for (var x = firstRow; fromLeft ? (x < imgWidth) : (x > -1); x += offset) {
    // loop through each row
    for (var y = 0; y < imgHeight; y++) {
      // if not white, return row
      if (getAlpha(x, y, imgWidth, imgData)) {
        return x
      }
    }
  }

  // the whole image is white already
  return null
}
