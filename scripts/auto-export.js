#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Auto-generate enum export file
function generateEnumExports() {
	const enumsDir = path.join(__dirname, '../enums')
	const indexFile = path.join(enumsDir, 'index.ts')

	// Read all .ts files (exclude index.ts and other special files)
	const files = fs.readdirSync(enumsDir)
		.filter(file =>
			file.endsWith('.ts') &&
			!file.startsWith('index') &&
			!file.startsWith('glob-import') &&
			file !== 'README.md'
		)
		.map(file => file.replace('.ts', ''))
		.sort()

	// Generate export content
	const exports = files.map(file => `export * from './${file}'`).join('\n')

	const content = `// Auto-generated enum export file
// Generated at: ${new Date().toISOString()}
// Included enum files: ${files.join(', ')}

${exports}
`

	// Write to file
	fs.writeFileSync(indexFile, content, 'utf8')

	console.log('✅ Enum export file generated')
	console.log('📁 Included enum files:', files.join(', '))
}

// Run generation
generateEnumExports()
