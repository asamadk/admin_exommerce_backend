import CircularProgress from '@mui/material/CircularProgress';
import React, { useEffect, useState } from 'react';

export default function AlifCircularLoader(props) {

    const [open,setOpen] = useState(props.open);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '-12px',
        marginLeft: '-12px',
    }

    return (
        props.open && <CircularProgress sx={style} />
    )
}