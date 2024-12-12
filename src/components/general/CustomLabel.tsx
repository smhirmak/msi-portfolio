import InfoIcon from '@mui/icons-material/Info';
import { InputLabel, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

interface CustomLabelProps {
  id: string;
  label: string;
  tooltip?: string[];
  disabled?: boolean;
}

const CustomLabel: React.FC<CustomLabelProps> = ({ id, label, tooltip, disabled = false }) => {
  const formatInfoForTooltip = (info: string[]): string => info.map((item, index) => `<div>${item}</div>`).join('');
  return (
    <InputLabel sx={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', gap: '.5rem' }} id={`${id}-label`} htmlFor={id} shrink={false}>
      <Typography fontSize={{ xs: '.8rem', md: '1rem' }} className={`${disabled ? 'text-gray-500' : 'text-text-secondary'} dark:text-darkenWhite`}>
        {label}
      </Typography>
      {(tooltip && tooltip.length > 0) && (
        <Tooltip
          sx={{ height: '1.4rem' }}
          title={<div dangerouslySetInnerHTML={{ __html: formatInfoForTooltip(tooltip) }} />}
          arrow
        >
          <InfoIcon fontSize="small" sx={{ color: 'var(--input-dark-border-color)' }} />
        </Tooltip>
      )}
    </InputLabel>
  );
};

export default CustomLabel;
