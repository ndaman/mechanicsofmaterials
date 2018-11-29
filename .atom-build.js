module.exports = {
  cmd: "reveal-md",
  sh: true,
  cwd: "{FILE_ACTIVE_PATH}",
  args: ["{FILE_ACTIVE_NAME}", "--static", "docs", "--static-dirs=images","&& ping localhost -n 2 >NUL",
  "&& move docs\\index.html docs\\{FILE_ACTIVE_NAME_BASE}.html", "&& copy index.html docs\\index.html"],
  keymap: "ctrl-alt-b",
  atomCommandName: "user:reveal-md-static"/*,
  postBuild: function () {
    console.log("This is run **after** the build command {FILE_ACTIVE_PATH}");
    module.exports = {
      cmd: "mv",
      sh: true,
      args: ["docs/index.html", "docs/{FILE_ACTIVE_NAME_BASE.html}"],
      atomCommandName: "reveal-move"
    };
  }*/
};
