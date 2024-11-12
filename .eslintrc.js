/*
 * @Author: 卢天宇
 * @Date: 2024-11-12 18:00:24
 * @Description:
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // 禁用 no-explicit-any 规则
    "@typescript-eslint/no-inferrable-types": "off", // 如果需要，也可以关闭其他相关规则
  },
};
