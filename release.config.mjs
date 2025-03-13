/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
    branches: ['main'],
    plugins: [
        [
            '@semantic-release/exec',
            {
                prepareCmd: './tools/set-version.sh ${nextRelease.version}',
                successCmd:
                    "echo 'next-release-version=${nextRelease.version}' >> $GITHUB_OUTPUT",
            },
        ],
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
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
