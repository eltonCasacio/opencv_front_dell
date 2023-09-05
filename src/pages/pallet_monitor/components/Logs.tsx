import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { getLogs } from "../../../services/pallet_monitor"

type LogsParams = [[
    {
        text: string,
        color: string
    }
]]

export const Logs = () => {
    const [linhas, setLinhas] = useState<LogsParams>([[{ text: '', color: '' }]])

    useEffect(() => {
        getLogs().then(data => data && setLinhas(data))
    }, [])


    return (
        <Box>
            {linhas && linhas.map((linha, idx) => {
                return (
                    <div key={idx}>
                        {linha.map((item, i) => <span key={i} style={{ color: item.color }}>{item.text} </span>)}
                    </div>
                )
            })}
            <br />
        </Box>
    )
}