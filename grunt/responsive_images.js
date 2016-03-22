var options = {
  engine: "im",
  newFilesOnly: true,
  quality: 70,
}

module.exports = {
  dev: {
    files: []
  }
  // dev: {
  //   options: {
  //     engine: options.engine,
  //     newFilesOnly: options.newFilesOnly,
  //     quality: options.quality,
  //     sizes: [{ width: 560 }]
  //   },
  //   files: [
  //     {
  //       cwd: '<%=temp_dir%>banners/',
  //       dest: '<%=temp_dir%>resized/banners/',
  //       expand: true,
  //       src: ['**.{jpg,gif,png}'],
  //     },
  //   ]
  // },
  //
  // logo: {
  //   options: {
  //     engine: options.engine,
  //     newFilesOnly: options.newFilesOnly,
  //     quality: options.quality,
  //     sizes: [{ width: 90 }]
  //   },
  //   files: [{ '<%=temp_dir%>resized/PU_logo.png' : '<%=temp_dir%>PU_logo.png' }]
  // }
}
