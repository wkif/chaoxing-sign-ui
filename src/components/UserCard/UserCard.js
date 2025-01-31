import { Delete } from '@mui/icons-material'
import { Typography, Card, CardContent, CardActionArea, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './UserCard.css'

function UserCard(props) {
  const phoneStr = `${props.phone.substr(0, 3)} **** **${props.phone.substr(9, 2)}`
  const navigate = useNavigate()
  const [contextMenu, setContextMenu] = React.useState(null)

  const removeUser = () => {
    let request = props.indb.transaction('user', 'readwrite').objectStore('user').delete(props.phone)
    request.onsuccess = (event)=>{
      console.log('用户已被移除')
      handleClose()
      window.location.reload()
    }
  }

  const handleContextMenu = (event) => {
    event.preventDefault()
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX - 2,
          mouseY: event.clientY - 4,
        }
        : null,
    )
  }

  const handleClose = () => {
    setContextMenu(null)
  }


  return (
    <Card sx={{
      display: 'inline-block',
      maxWidth: 345,
      minWidth: 300,
      backgroundColor: '#ecf0f3',
      marginBottom: 3.5,
      marginRight: 3.5,
      verticalAlign: 'bottom'
    }}
      onContextMenu={handleContextMenu}
      className='neum-card'
    >
      <CardActionArea onClick={() => { navigate('/dash/' + props.phone) }}>
        <CardContent>
          <Typography variant="h5" align='left' component="div">
            <span className='name'>{props.name}</span>
            <p>{phoneStr}</p>
          </Typography>
          <Typography sx={{ color: 'rgb(73, 85, 105)' }} variant="body2" align='right'>
            凭证日期：{props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={removeUser}>
          <ListItemIcon>
            <Delete />
          </ListItemIcon>
          <ListItemText>移除</ListItemText>
        </MenuItem>
      </Menu>
    </Card >
  )
}

export default UserCard