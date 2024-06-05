import React from 'react';
import { useState } from 'react';
import Button  from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography  from '@mui/material/Typography';

type DateRangeOption = 'today' | 'yesterday' | 'last3Days' | 'last5Days' | 'pastWeek' | 'last2Weeks' | 'lastMonth' | 'lastYear' | 'nextMonth' | 'nextYear' | 'customRange';

interface DateRangeSelectorProps {
  onApply: (startDate: Date, endDate: Date) => void;
  onCancel: () => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ onApply, onCancel }) => {
  const [selectedOption, setSelectedOption] = useState<DateRangeOption>('today');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleApply = () => {
    if (startDate && endDate) {
      onApply(startDate, endDate);
    }
    onCancel();
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h6" mb={1}>Select Date Range</Typography>
        <FormControl fullWidth>
          {/* <InputLabel sx={{ fontSize: '1.2rem', color: '#333' ,fontWeight:'650'}}>Range</InputLabel> */}
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value as DateRangeOption)}
            size='small'
            sx={{marginTop:1}}
          >
            <MenuItem value="today">Today</MenuItem>
            <MenuItem value="yesterday">Yesterday</MenuItem>
            <MenuItem value="last3Days">Last 3 Days</MenuItem>
            <MenuItem value="last5Days">Last 5 Days</MenuItem>
            <MenuItem value="pastWeek">Past Week</MenuItem>
            <MenuItem value="last2Weeks">Last 2 Weeks</MenuItem>
            <MenuItem value="lastMonth">Last Month</MenuItem>
            <MenuItem value="lastYear">Last Year</MenuItem>
            <MenuItem value="nextMonth">Next Month</MenuItem>
            <MenuItem value="nextYear">Next Year</MenuItem>
            <MenuItem value="customRange">Custom Range</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {(selectedOption === 'customRange') && (
        <>
          <Grid item xs={6}>
            <InputLabel sx={{ fontSize: '0.75rem' }}>From Date</InputLabel>
            <Input
              fullWidth
              type="date"
              value={startDate ? startDate.toISOString().slice(0, 10) : ''}
              onChange={(e) => setStartDate(new Date(e.target.value))}
              sx={{ mb: 1, backgroundColor: '#f3f3f3', borderRadius: '4px', p:1 }}
            />
            <InputLabel sx={{ fontSize: '0.75rem' }}>From Time</InputLabel>
            <Input
              fullWidth
              type="time"
              value={startDate ? startDate.toISOString().slice(11, 16) : ''}
              onChange={(e) => setStartDate(new Date(`${startDate?.toISOString().slice(0, 10)}T${e.target.value}`))}
              sx={{ mb: 1, backgroundColor: '#f3f3f3', borderRadius: '4px', p:1 }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel sx={{ fontSize: '0.75rem'}}>To Date</InputLabel>
            <Input
              fullWidth
              type="date"
              value={endDate ? endDate.toISOString().slice(0, 10) : ''}
              onChange={(e) => setEndDate(new Date(e.target.value))}
              sx={{ mb: 1, backgroundColor: '#f3f3f3', borderRadius: '4px', p:1 }}
            />
            <InputLabel sx={{ fontSize: '0.75rem' }}>To Time</InputLabel>
            <Input
              fullWidth
              type="time"
              value={endDate ? endDate.toISOString().slice(11, 16) : ''}
              onChange={(e) => setEndDate(new Date(`${endDate?.toISOString().slice(0, 10)}T${e.target.value}`))}
              sx={{ mb: 1, backgroundColor: '#f3f3f3', borderRadius: '4px', p:1 }}
            />
          </Grid>
        </>
      )}
      <Grid item xs={12} sx={{ marginTop: 2 }}>
        <Button variant="contained" size='small' color="primary" onClick={handleApply}>
          Apply
        </Button>
        <Button variant="contained" size='small' color="primary" onClick={onCancel} sx={{ marginLeft: 2 }}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default DateRangeSelector;
