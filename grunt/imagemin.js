var files = [
  {
    cwd: 'assets/images/',           // Src matches are relative to this path
    dest: "<%=build_dir%>assets/images",
    expand: true,                  // Enable dynamic expansion
    src: ['**/*.{png,jpg,gif,svg,ico}'],   // Actual patterns to match
  },
];

module.exports = {
  dev: { files: files },
  prod: { files: files }
}
