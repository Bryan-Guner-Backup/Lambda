---
title: How I Converted Profilo to Docusaurus in Under 2 Hours
author: Christine Abernathy
authorURL: http://twitter.com/abernathyca
authorImageURL: https://graph.facebook.com/1424840234/picture/?height=200&width=200
authorFBID: 1424840234
authorTwitter: abernathyca
tags: [profilo, adoption]
---

> _"Joel and I were discussing having a website and how it would have been great to launch with it. So I challenged myself to add Docusaurus support. It took just over an hour and a half. I'm going to send you a PR with the addition so you can take a look and see if you like it. Your workflow for adding docs wouldn't be much different from editing those markdown files."_
>
> _— Note sent to the Profilo team_

This is the story of the rather short journey it took to create the [Profilo](https://facebookincubator.github.io/profilo/) website using Docusaurus.

Profilo, an Android library for collecting performance traces from production, [was announced](https://code.fb.com/android/profilo-understanding-app-performance-in-the-wild/) earlier this year. The project was [published on GitHub](https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8) with a less than [a handful or Markdown files](https://github.com/facebookincubator/profilo/tree/802042f90f990998a272387e371b893af52465b8/docs) to describe its functionality and no website to showcase any branding and highlight the logo. The task at hand was to turn these existing docs and logo into a website.

<!--truncate-->

In general, when creating a website with Docusaurus you do the following:

1. Generate a template website using Docusaurus scripts.
1. Customize the generated template files for your desired site colors and your project configuration (ex: website and GitHub links).
1. Create the website content:
   1. Add your docs and any supporting assets.
   1. Customize the default landing page provided by Docusaurus to suit your needs.
   1. Configure the default site navigation file.
1. Publish the website and set up how it will be published for future changes.

Given I had pre-existing Markdown files, I didn't have to generate the core content but simply make sure that Docusaurus could process the files by adding the expected metadata to them. Most of the work would therefore consist of customizing the defaults provided by Docusaurus.

## Overview of Steps Taken

Here's an overview of the steps taken to convert to a website. I'll discuss some of the design aspects in a later section.

**Design and colors:**

1. Got all the desired logo formats from designer. I had to create the _.favicon_ one.
1. Worked out some passable primary and secondary website colors using the http://paletton.com/ tools - very handy!

**Initial website setup:**

1. Forked the [Profilo project](https://github.com/facebookincubator/profilo/) on GitHub and created a local clone of the fork to set up the website.
1. Created the initial Docusaurus website using the [installation instructions](https://v1.docusaurus.io/docs/en/installation.html).
1. Deleted the `docs-examples-from-docusaurus` and `website/blog-examples-from-docusaurus` folders as these would not be needed. Profilo had existing docs we could use and there was no need for blogs at this time.

**Content creation:**

1.  Added metadata to the existing Markdown files found in the `docs` folder, for example:

        +---
        +id: architecture
        +title: Architecture
        +sidebar_label: Architecture
        +---

1.  Added the logo assets to the `website/static/img` folder.
1.  Modified `website/pages/en/index.js`, the landing page, to highlight Profilo features.
1.  Modified `website/core/Footer.js`, the footer, to simplify it for Profilo.
1.  Edited `website/siteConfig.js` (website configuration file) to specify the previously chosen primary and secondary colors.
1.  Modified `website/sidebars.json` that specifies the sidebar navigation. Listed all the docs and customized it based on the metadata added to the Markdown files.
1.  Edited the website configuration file to specify the GitHub properties, logo images, header links, and the website link.
1.  Tested the website locally throughout this phase. (I ran `yarn start` from the `website` folder to start the server.)

**Feedback and review changes:**

1. Sent a [pull request](https://github.com/facebookincubator/profilo/pull/6) to the project.
1. Updated the colors after the designer rightly gasped at the ones I had chosen (IANAD).
1. Updated the colors and updated the PR.
1. The PR was then accepted and [merged](https://github.com/facebookincubator/profilo/commit/6ad033aaf5a7d54e6d842f45a5bccd051a8e45ad). Yay!

**Website publishing:**

1.  Pushed the first website version by running the Docusaurus publish script from the command line:

        USE_SSH=true \
          GIT_USER=caabernathy \
          CURRENT_BRANCH=master \
          yarn run publish-gh-pages

1.  Configured CircleCI using the [provided Docusaurus instructions](https://v1.docusaurus.io/docs/en/publishing.html#automating-deployments-using-continuous-integration). There were 2 PRs for this, [the first](https://github.com/facebookincubator/profilo/pull/8)for the initial config and [the second](https://github.com/facebookincubator/profilo/pull/12) to make sure CircleCI only triggered for changes in the master branch (thanks Joel Marcey!).

The final website was published on https://facebookincubator.github.io/profilo/. It had taken 1.5 hours to get to the initial PR stage and another half an hour or so to respond to review feedback and publish the website.

## Design

Here's what the initial website looked like when the first pull request was sent out:

![Website Initial Design](/img/profilo_blog_post_website_initial.png)

Most of the time in the content creation was spent picking colors that worked reasonably well with the given logo. These colors were a good jumping off point for designer feedback. I used Photoshop to sample various portions of the logo.

![Picking Color Photoshop](/img/profilo_blog_post_photoshop_color_picker.png)

I then took the RGB representation of the color and set it as the baseline color on [Paletton](http://paletton.com/). The website then gave me various color options to try on the website by editing the Docusaurus website configuration file.

![Picking Color Paletton](/img/profilo_blog_post_palette_website_color_picker.png)

The selected primary and secondary colors were a good jumping off point for designer feedback.

There were also modifications made to the default website generated by Docusaurus. These changes were mainly around simplifying the footer and creating a customized landing page for Profilo that listed the project's features.

Here's what the final website looked like:

![Website Final Design](/img/profilo_blog_post_website_final.png)

This is an example page showing the core content, in this case the Getting Started page:

![Website Docs Example](/img/profilo_blog_post_website_final_docs.png)

This also shows the sidebar structure that was set up through editing `website/sidebars.json`.

Lastly, I didn't have to worry about handling responsive design. You get this out of the box with Docusaurus!

![Mobile Site](/img/profilo_blog_post_android_ios.png)

## Final Thoughts

The Profilo engineers were happy to see that they didn't have to change their workflow to update existing content. They were able to continue working with Markdown files. This will still be true in the future if new docs are added, although there may be some config changes needed if the sidebar navigation needs to be updated.

The infrastructure provided by Docusaurus made it easy to convert Markdown files into a working website. Even though the project had only three docs, this gave Profilo a more professional look. So, it was well worth the short time investment to get it done.
