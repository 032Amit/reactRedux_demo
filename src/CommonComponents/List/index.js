import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import malePP from '../../assets/malePP.png'
import femalePP from '../../assets/femalePP.png'
import {MoreVert, RadioButtonChecked, Event} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   maxWidth: 365,
  // },
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
                  <div style={{ display: 'flex' ,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ flexDirection: 'row', justifyContent: 'flex-start', textAlign: 'start', display: 'flex', alignItems:'center' }}>
                        <img src={femalePP} alt="logo" className={classes.logo} style={{ width: 20, height: 20 }} />
                        <img src={malePP} alt="logo" className={classes.logo} style={{ width: 20, height: 20, marginLeft: 10 }} />
                        <RadioButtonChecked style={{ width: 15, height: 15, marginLeft: 10, fill: "#833589" }} />
                    </div>
                    <div style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                      <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <div style={{ display: 'contents',flexDirection: 'row', fontSize: 10 }}>
                          <Event style={{ width: 15, height: 15, marginRight: 5}} />
                          <text>21 nov 2020</text>
                        </div>
                        <div style={{ backgroundColor: 'blue', marginLeft: 10, width: 45, borderRadius: 3, fontSize: 12, color: '#fff' }}>
                          75%
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
            </Card>
        </div>
    ))
  );
}