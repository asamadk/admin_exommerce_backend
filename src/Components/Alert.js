import React, { useState } from 'react'

import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';


export default function AlifAlert(data){
    return(
        <Collapse in={data.show}>
            <Alert severity={data.severity}>{data.message}</Alert>
        </Collapse>

    )
}