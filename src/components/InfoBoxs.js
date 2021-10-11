import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'

const InfoBoxs = ({ title, cases, active, isRed, total, onClick }) => {
    return (
        <Card className={`infoBox ${active && 'infoBox--selected'} ${isRed && "infoBox--red"}`} onClick={onClick}>
            <CardContent>
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>{cases}</h2>

                <Typography className="infoBox__total" >{total} Total</Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBoxs
