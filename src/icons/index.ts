/*
  Icons
  -----
  Icon exports from lucide-react for use with Counterfoil components.
  
  Icons are provided via lucide-react for convenience, but components accept
  any ReactNode, so you can easily swap in your own icon library.
  
  To override with a different icon library:
  1. Install your preferred icon library (e.g., react-icons, heroicons)
  2. Replace imports: change `from 'counterfoil-kit/icons'` to your library
  3. Components will work unchanged since they accept ReactNode
  
  Example override:
    // Before
    import { Home, User } from 'counterfoil-kit/icons'
    
    // After (using react-icons)
    import { FaHome, FaUser } from 'react-icons/fa'
    const Home = FaHome
    const User = FaUser
*/

// Navigation & UI
export {
  Home,
  Menu,
  X as Close,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Search,
  Settings,
  User,
  Users,
  Bell,
  Mail,
  Calendar,
  Clock,
  Filter,
  MoreVertical,
  MoreHorizontal,
} from "lucide-react"

// Actions
export {
  Plus,
  Minus,
  Edit,
  Trash,
  Save,
  Download,
  Upload,
  Copy,
  Check,
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react"

// Content & Media
export {
  Image,
  File,
  FileText,
  Folder,
  Link as LinkIcon,
  ExternalLink,
  Eye,
  EyeOff,
  Lock,
  Unlock,
} from "lucide-react"
