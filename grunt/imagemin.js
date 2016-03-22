var files = [
  {
    cwd: 'assets/images/',           // Src matches are relative to this path
    dest: "<%=build_dir%>assets/images",
    expand: true,                  // Enable dynamic expansion
    src: ['**/*.{png,jpg,gif,svg}'],   // Actual patterns to match
  },

  // Grab all of resized images and merge them
  {
    cwd: '<%=temp_dir%>resized/',
    dest: "<%= build_dir %>assets/images",
    expand: true,
    src: ['**/*.{png,jpg,gif,svg}'],
  }
];

module.exports = {
  dev: { files: files },
  prod: { files: files }
}
