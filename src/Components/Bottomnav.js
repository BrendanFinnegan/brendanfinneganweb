
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
function Bottomnav () {
    return(
        <BottomNavigation className="bottom-navbar" style={{backgroundColor: '#c9caca'}}
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
        //   showLabels
        //   className={classes.root}
        >
          <BottomNavigationAction label="Recents" href="/" icon={<HomeIcon />} />
          <BottomNavigationAction label="Favorites" href="/portfolio" icon={<WorkIcon />} />
          <BottomNavigationAction label="Nearby" href="/contact" icon={<EmailIcon />} />
        </BottomNavigation>
    )
}

export default Bottomnav