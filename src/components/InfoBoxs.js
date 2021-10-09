import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const InfoBoxs = ({ title, cases, total }) => {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className="infoBox__cases" >{cases} today</h2>

                <Typography className="infoBox__total" >{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBoxs
