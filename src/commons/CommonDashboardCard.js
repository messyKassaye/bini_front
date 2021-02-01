import React,{useEffect,useState}  from 'react';
import {Card, CardContent, CardHeader} from "@material-ui/core";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import {chartData as data} from "../auth/data/chartData";
import {grey} from "@material-ui/core/colors";

export const CommonDashboardCard =(props)=>{
    const[device,setDivce] = useState('big')

    useEffect(()=>{
        resize()
    })
  const resize =()=>{
        if (window.innerWidth <= 760) {
            setDivce('small')
        }
    }

    return (
        <Card style={{backgroundColor:props.cardBackgroundColor,color:props.textColor}}>
            <CardHeader
             title={props.title}
             subheader={<span style={{color:grey[400]}}>{props.subheader}</span>}
             action={props.action}
            />
            <CardContent style={{padding:0}}>
                <AreaChart
                    width={device==='small'?363:400}
                    height={50}
                    data={data}
                    style={{position:'relative'}}
                    margin={{top:0,left:0,right:0,bottom:0}}
                >
                    <Area type="monotone" dataKey="uv" stroke={props.chartBackgroundColor} fill={props.chartBackgroundColor} />
                </AreaChart>

            </CardContent>

        </Card>
    );

}

export default CommonDashboardCard;