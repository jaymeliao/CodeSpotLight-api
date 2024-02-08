const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadDir = "uploads/profileImageAssets/";
    if (req.path.includes("/new-post")) {
      uploadDir = "uploads/postMediaAssets/";
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  let allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/avif",
    "image/webp",  
    "image/bmp",
    "image/tiff"
  ];

  // Allow video types only for new posts
  if (req.path.includes("/new-post")) {
    allowedTypes = allowedTypes.concat(["video/mp4", "video/webm"]);
  }

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true); // Accept the file
  } else {
    cb(new Error("Invalid file type"), false); // Reject the file
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;

//================= Reference Code ==========

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Append extension
//   }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;
