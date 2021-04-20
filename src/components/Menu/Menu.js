import React from 'react'
import MenuItem from './MenuItem'
import { BiHomeAlt, BiFile, BiMailSend, BiEdit, BiRss } from 'react-icons/bi'

const Menu = () => {
  return (
    <>
      {paths.map((item, i) => {
        return (
          <MenuItem
            ke={i}
            link={item.location}
            svg={item.icon}
            path={item.name}
            command={item.command}
          />
        )
      })}
    </>
  )
}

export default Menu

export const paths = [
  { location: '/', name: 'home', icon: <BiHomeAlt />, command: 'a' },
  { location: '/project', name: 'project', icon: <BiFile />, command: 'p' },
  { location: '/contact', name: 'contact', icon: <BiMailSend />, command: 'c' },
  { location: '/writing', name: 'writing', icon: <BiEdit />, command: 'r' },
  { location: '/rss', name: 'RSS', icon: <BiRss />, command: 'x' },
]
