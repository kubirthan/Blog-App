import {Sidebar} from 'flowbite-react'
import {Link} from 'react-router-dom'
import {HiUser, HiArrowSmRight} from 'react-icons/hi'

export default function DashSidebar() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl) {
      setTab(tabFromUrl)
    }
  }, [location.search])
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup>
                <Link to='dashboard?tab=profile'>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={'User'} labelColor='dark'>
                    Profile
                </Sidebar.Item>
                <Sidebar.Item active icon={HiArrowSmRight} className='cursor-pointer'>
                    Sign Out
                </Sidebar.Item>
                </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
