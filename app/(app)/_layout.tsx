import { Drawer} from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer >
        <Drawer.Screen 
            name='index'
            options={{
                title: 'Express'
            }}
        />
        <Drawer.Screen 
            name='settings'
            options={{
                title: 'Configurações'
            }}
        />
    </Drawer>
  )
}
