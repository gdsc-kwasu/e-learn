export default {
  "title": "e-learn",
  "tagline": "A learning platform to curate learning materials for members of GDSC KWASU to enhance their learning process. This will be a point of reference for students in need of course materials",
  "url": "https://learn.gdsckwasu.club",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/google.png",
  "organizationName": "gdsc-kwasu",
  "projectName": "e-learn",
  "themeConfig": {
    "image": "/static/img/ogimage.png",
    "navbar": {
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "learn",
          "label": "Learning Resources",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "items": [
            {
              "html": "GDSC KWASU"
            },
            {
              "html": "© 2022 | All Rights Reserved."
            },
            {
              "html": "Learn, Grow and Connect"
            }
          ]
        },
        {
          "title": "Learning Resources",
          "items": [
            {
              "label": "web",
              "to": "docs/"
            },
            {
              "label": "UI/UX",
              "to": "docs/ui/ui-overview/interface"
            },
            {
              "label": "Mobile App",
              "to": "docs/android/overview"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Twitter",
              "href": "https://twitter.com/gdsc_kwasu"
            },
            {
              "label": "Discord",
              "href": "#"
            },
            {
              "label": "Slack",
              "href": "#"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "https://blog.gdsckwasu.club"
            },
            {
              "label": "Official website",
              "href": "https://gdsckwasu.club"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/gdsc-kwasu"
            }
          ]
        }
      ],
      "copyright": "Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/seven/Documents/codes/gdsc/e-learn/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/home/seven/Documents/codes/gdsc/e-learn/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};