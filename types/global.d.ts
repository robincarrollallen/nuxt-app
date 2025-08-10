declare global {
  type Recordable = Record<string, any>
	type ActivityVariables = Record<string, string | number>
	type ActivityRulesMap = Record<string, {
		[Key: string]: string
	}>
}

export {}
