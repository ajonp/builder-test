export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61a675060410e76cb37ac284",
                  title: "Sanity Studio",
                  name: "builder-test-studio",
                  apiId: "a4cce14c-58dd-4732-b931-a003b5e19a08",
                },
                {
                  buildHookId: "61a67506419e94638861e634",
                  title: "Blog Website",
                  name: "builder-test-web",
                  apiId: "5cb9178f-a695-44c9-ba58-86061235f507",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ajonp/builder-test",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://builder-test-web.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
