import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { useAuthContext } from 'src/auth/hooks';
// ----------------------------------------------------------------------

export default function NavUpgrade() {
  const { user } = useAuthContext();
  const url = 'https://api-dev-minimal-v510.vercel.app/assets/images/avatar/avatar_4.jpg';

  const router = useRouter();

  const { logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path) => {
    router.push(path);
  };

  return (
    <Stack
      sx={{
        px: 1,
        py: 5,
        textAlign: 'center',
      }}
    >
      <Stack alignItems="center">
        <Box sx={{ position: 'relative' }}>
          <Avatar src={user?.image || url} alt={user?.displayName} sx={{ width: 48, height: 48 }}>
            {user?.displayName?.charAt(0).toUpperCase()}
          </Avatar>
        </Box>

        <Stack spacing={0.5} sx={{ mb: 2, mt: 1.5, width: 1 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.firstname} {user?.lastname}
          </Typography>

          <Typography variant="body2" noWrap sx={{ color: 'text.disabled' }}>
            {user?.email}
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Button variant="outlined" onClick={() => handleClickItem(paths.dashboard.user)}>
            Edit Profile
          </Button>
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
