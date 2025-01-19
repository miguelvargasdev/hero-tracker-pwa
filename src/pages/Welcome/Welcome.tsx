import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
// import useOrientation from '@/hooks/useOrientation';
import Button from '@mui/material/Button';

function Welcome() {
  // const isPortrait = useOrientation();

  // const width = isPortrait ? '40%' : '30%';
  // const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <Meta title="Welcome" />
      <FullSizeCenteredFlexBox flexDirection={'column'} gap={2}>
        <Button variant="contained">Solo</Button>
        <Button variant="contained">Standard</Button>
        <Button variant="contained">Tyrant</Button>
        <Button variant="contained">Skirmish</Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Welcome;
