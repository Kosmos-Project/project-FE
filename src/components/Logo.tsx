import { Box, Tooltip } from '@mui/material';
import {
  LogoSign,
  LogoSignInner,
  LogoSignWrapper,
  LogoText,
  LogoTextWrapper,
  LogoWrapper,
  VersionBadge
} from './LogoStyle';

function Logo() {
  return (
    <LogoWrapper to="/overview">
      <LogoSignWrapper>
        <LogoSign>
          <LogoSignInner />
        </LogoSign>
      </LogoSignWrapper>
      <Box
        component="span"
        sx={{
          display: { xs: 'none', sm: 'inline-block' }
        }}
      >
        <LogoTextWrapper>
          <Tooltip title="Version 2.0" arrow placement="right">
            <VersionBadge>3.1</VersionBadge>
          </Tooltip>
          <LogoText>Tokyo Free White</LogoText>
        </LogoTextWrapper>
      </Box>
    </LogoWrapper>
  );
}

export default Logo;
