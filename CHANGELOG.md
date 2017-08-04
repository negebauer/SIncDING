# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
<!---
### Added
### Changed
### Deprecated
### Removed
### Fixed
### Security
-->

### Changed
- Updated Changelog [@negebauer]
- Updated and applied Eslint config [@negebauer]

## [1.2.0] - 2017-07-31
### Changed
- Update siding url to 2017-2 [@negebauer]

## [1.2.0] - 2017-06-16
### Added
- Circle CI integration [@negebauer]

### Changed
- Use axios
- User async/await
- General refactor [#19](https://github.com/open-source-uc/sincding/pull/19)

### Fixed
- Siding return 500 on multiple calls (related to [#18](https://github.com/open-source-uc/sincding/issues/18))

## [1.1.4] - 2017-03-29
### Added
- Export sincding modules for external libraries [@negebauer]

## [1.1.3] - 2017-03-28
### Added
- Deploy script

### Changed
- Check for updates each hour [@negebauer] (when running)

## [1.1.2] - 2017-03-27
### Changed
- Error log [@negebauer]
- Trim parent name on print [@negebauer]
- Trim path name on path format [@negebauer]
- Main in package [@negebauer]

## [1.1.1] - 2017-03-26
### Fixed
- Error when loading user data [@negebauer]

## [1.1.0] - 2017-03-26
### Added
- Improve user data update
  - Verify ignore course acronyms separated by space [@negebauer]
  - Turn acronyms to uppercase [@negebauer]
  - Previouse data is default [@negebauer]
  - Check folder path for user data [#7](https://github.com/open-source-uc/sincding/issues/7) [@negebauer]
- Check for errors in prompt (like Ctrl+C) [@negebauer]
- Some comments to main script [@negebauer]
- Nicer download summary [#6](https://github.com/open-source-uc/sincding/issues/6) [@negebauer]

### Changed
- Project structure [@negebauer]
- User logs [@negebauer]

## [1.0.9] - 2017-03-16
### Added
- Show version [@negebauer]

## [1.0.8] - 2017-03-16
### Changed
- Only create file after download is finished [@negebauer]

## [1.0.7] - 2017-03-11
### Fixed
- Fix restricted characters in course, folder and file name [#1](https://github.com/open-source-uc/sincding/pull/#1) [@aaossa]

## [1.0.6] - 2017-03-07
### Added
- Main app [@negebauer]
- Yarn support [@mrpatiwi]

[Unreleased]: https://github.com/open-source-uc/sincding/compare/v1.2.1...HEAD
[1.2.1]: https://github.com/open-source-uc/sincding/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/open-source-uc/sincding/compare/v1.1.4...v1.2.0
[1.1.4]: https://github.com/open-source-uc/sincding/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/open-source-uc/sincding/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/open-source-uc/sincding/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/open-source-uc/sincding/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/open-source-uc/sincding/compare/v1.0.9...v1.1.0
[1.0.9]: https://github.com/open-source-uc/sincding/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/open-source-uc/sincding/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/open-source-uc/sincding/compare/v1.0.6...v1.0.7
[1.0.6]: https://github.com/open-source-uc/sincding/compare/v1.0.0...v1.0.6

## Contributors

[@negebauer]:https://github.com/negebauer
[@negebauer]

[@mrpatiwi]:https://github.com/mrpatiwi
[@mrpatiwi]

[@aaossa]:https://github.com/aaossa
[@aaossa]

## Contributing

- Add you github profile link to the Contributors section
- Add a new line to the Unreleased section with a description of what you did and reference the PR you opened and your profile. Make sure to add it to the corresponding subsection
