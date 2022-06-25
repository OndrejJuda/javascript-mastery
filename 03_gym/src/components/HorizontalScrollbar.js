import React from 'react';
import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {
        data.map((item) => {
          const id = item.id || item;
          return (
            <Box
              key={id}
              itemId={id}
              title={id}
              m='0 40px'
            >
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
          )
        })
      }
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;