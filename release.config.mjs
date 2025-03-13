/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        'semantic-release-react-native',
        [
            '@semantic-release/git',
            {
                assets: [
                    'CHANGELOG.md',
                    'ios/**/Info.plist',
                    'android/app/build.gradle',
                ],
            },
        ],
    ],
}
