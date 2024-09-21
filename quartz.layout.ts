import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// hiding notes from graph via tags
const tagsToRemove = ["graph-exclude"]
const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"]
  }
};

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.LinksHeader()],
  afterBody: [Component.Graph()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Costeer/101st-Wiki",
      "Discord Community": "https://github.com/Costeer/101st-Wiki",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),


    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link", 
      filterFn: (node) => node.name !== "templates",
    })),
  ],
  right: [
    Component.MobileOnly(Component.Explorer({
      folderClickBehavior: "link", 
      filterFn: (node) => node.name !== "templates",
    })),
    Component.Search(),
    Component.Backlinks(),    
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta(), Component.MobileOnly(Component.TableOfContents2())],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      folderClickBehavior: "link", 
      filterFn: (node) => node.name !== "templates",
    })),
  ],
  right: [
    Component.MobileOnly(Component.Explorer({
      folderClickBehavior: "link", 
      filterFn: (node) => node.name !== "templates",
    })),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
}
