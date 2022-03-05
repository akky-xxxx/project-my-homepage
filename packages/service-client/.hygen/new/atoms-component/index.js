module.exports = {
  prompt: (arg) => {
    const { inquirer } = arg
    const questions = [
      {
        type: "input",
        name: "componentName",
        message: "component 名を指定してください",
        required: true,
      },
      {
        type: "confirm",
        name: "isOnlyStyle",
        message: "スタイルのみの component ですか？",
      },
      {
        type: "confirm",
        name: "hasChildren",
        message: "children は必要ですか？",
      },
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { componentName: componentNameBase, hasChildren } = answers
      const componentType = hasChildren ? "FC" : "VFC"
      const [initial, ...latest] = [...componentNameBase]
      const componentName = `${initial.toUpperCase()}${latest.join("")}`
      const path = `src/components/atoms/${componentName}`
      return { ...answers, path, componentName, componentType }
    })
  },
}
