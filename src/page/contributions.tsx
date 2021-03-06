import { Card, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import * as classNames from 'classnames';
import * as React from 'react';

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    height: '100%',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize * 1.4,
    color: theme.palette.primary.main
  },
  card: {
    height: '100%',
  }
});

const contributions: { name: string, url: string, description: string }[] = [

  {
    name: 'Mention as contributor in Node.js release version 10.0.0',
    url: 'https://nodejs.org/en/blog/release/v10.0.0/',
    description: 'Once I was using Node.js socket API I noticed some of its signatures luck documentation so I made a pull request that was merged and released in release 10.0.0. I\'m proud my name appear in such a great product release page mentioning that contribution and proud that node.js users will read a couple of lines contributed by myself. Was enriching to participate in the pull request code review process made by Node.js team for that issue although it was just documentation, was extensively reviewed by lots of people.'
  },
  {
    name: 'Co-Author of java2script project',
    url: 'http://java2script.github.io/java2script/',
    description: `Ten years ago, when the concept of transpilers was not so common and GWT was in its early stages, the project java2script was one of the best tools to be able to write Rich Client Applications using Java programming language and transpile them to JavaScript. I made several contributions there so the original author made me co-author of the project. I learn a lot about code parsing and AST (both Java's and JavaScript's), and Eclipse Platform APIs and I implemented several libraries wrappers so people could write client code using Java and most used JavaScript libraries. Although today java2script is eclipsed by other technologies like GWT or TypeScript at that time was very promised and give me the opportunity to learn a lot. `
  },  
  
  {
    name: 'yui4 java mention in Yahoo YUI blog',
    url: 'https://yuiblog.com/blog/2010/04/13/yui4java-a-new-java-to-javascript-translator-using-yui-2/',
    description: 'In my early days with technologies like GTW and java2script I made a port of the whole YUI version 2 and 3 libraries so people can write applications using these libraries in the Java Programming language. This is the mention to me and my project yui4java that the Yahoo YUI team made in their blog. '
  },  

  {
    name: 'WIP',
    url: 'WIP',
    description: 'WIP'
  },  
  {
    name: 'WIP',
    url: 'WIP',
    description: 'WIP'
  },

]

function contributionsPage(props: WithStyles<typeof styles>) {
  const { classes, theme } = props
  return (
    <div className={classes.root}>
      <Grid container spacing={24} alignItems="stretch">
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Typography> 
              <h3 className={classNames('page-home', theme.palette.primary.main, classes.welcome)}>Open Source Contributions</h3>
              <div>This is just a list of contributions to (other's) open source projects that I feel proud of or just mentions to me in blogs, tweets, etc. </div>
              </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={24} alignItems="stretch">
        {contributions.map((contribution, i) =>
          <Grid item xs={12} sm={6} lg={4} key={i}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="headline" component="h2">
                  <Button href={contribution.url}>{contribution.name}</Button>
                </Typography>
                <Typography color="textSecondary">
                  {contribution.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default withStyles(styles, { withTheme: true })(contributionsPage);