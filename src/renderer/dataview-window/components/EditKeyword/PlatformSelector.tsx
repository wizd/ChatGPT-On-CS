import React, { useState, useEffect } from 'react';
import { Text, HStack, Box, Select } from '@chakra-ui/react';

type PlatformSelectorProps = {
  ptf: string | null;
  setPtf: (ptf: string) => void;
  platforms: any;
  isLoading: boolean;
};

const PlatformSelector = ({
  ptf,
  setPtf,
  platforms,
  isLoading,
}: PlatformSelectorProps) => (
  <HStack width="full" alignItems="center" mb={5}>
    <Box width="30%">
      <Text>选择平台：</Text>
    </Box>
    <Box width="70%">
      <Select
        value={ptf || ''}
        onChange={(e) => setPtf(e.target.value)}
        isDisabled={isLoading}
      >
        {platforms?.data.map((platform: any) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </Select>
    </Box>
  </HStack>
);

export default PlatformSelector;
