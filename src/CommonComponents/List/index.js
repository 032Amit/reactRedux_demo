import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import {MoreVert, AccountBox, RadioButtonChecked} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CustomList(props) {
  const classes = useStyles();
  const { listData, type } = props
  const [color, setColor] = useState('')

  useEffect(() => {
    selectStatusColor()
  }, [type]);
  
  const selectStatusColor = () => {
      if ( type === 'On Track' ) {
        setColor('3px solid rgb(76, 175, 80)')
      } else if (type === 'Delayed') {
        setColor('3px solid rgb(230, 56, 7)')
      } else if (type === 'On Hold') {
        setColor('3px solid rgb(243, 217, 51)')
      }
  }

  return (

    listData.map((data, key) => (
        <div style={{ borderTop: color, marginTop: 10 }}>
            <Card className={classes.root}>
                <CardHeader
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={data.title}
                titleTypographyProps={{variant:'subtitle2' }}
                style={{ margin: 0, paddingTop: 0, paddingRight: 10, paddingLeft: 10, paddingBottom: 0, textAlign: 'start' }}
                />
                <CardContent style={{ paddingBottom: 0 }}>
                    <div style={{ flexDirection: 'row', textAlign: 'start', display: 'flex', alignItems:'center', marginBottom: 5 }}>
                        <AccountBox />
                        <AccountBox />
                        <RadioButtonChecked style={{ width: 15, height: 15 }} />
                    </div>
                </CardContent>
            </Card>
        </div>
    ))
  );
}