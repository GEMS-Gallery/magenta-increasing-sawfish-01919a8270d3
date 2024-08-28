import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

type SearchBarProps = {
  onSearch: (tid: bigint) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTID, setSearchTID] = useState('');

  const handleSearch = () => {
    const tid = BigInt(searchTID);
    onSearch(tid);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
      <TextField
        label="Search by TID"
        variant="outlined"
        value={searchTID}
        onChange={(e) => setSearchTID(e.target.value)}
        type="number"
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
