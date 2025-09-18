module.exports = {
  npm: {
    publish: false, // 禁用 npm 发布
    version: false // 禁用 npm 版本检查
  },
  plugins: {
    "@release-it/conventional-changelog": {
      preset: "angular",
      infile: "CHANGELOG.md"
    }
  },
  git: {
    commitMessage: "chore: release v${version}"
  },
  github: {
    release: false
  }
};