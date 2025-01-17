export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf', 'revert']],
    'type-case': [0],//type 的输入格式,默认为小写‘lower-case’
    'scope-empty': [0], // scope 可为空
    'subject-case': [2, 'always', ['start-case', 'pascal-case']], // subject 用大写开头
    'header-max-length': [2, 'always', 72], // 限制提交信息的长度
  },
};
