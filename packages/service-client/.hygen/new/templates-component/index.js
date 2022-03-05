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
    ]
    return inquirer.prompt(questions).then((answers) => {
      const { componentName: componentNameBase } = answers
      const [initial, ...latest] = [...componentNameBase]
      const componentName = `${initial.toUpperCase()}${latest.join("")}`
      const path = `src/components/templates/${componentName}`
      return { ...answers, path, componentName }
    })
  },
}
