import React from "react";
import { useGetGeographyQuery } from "../../state/api";
import { Box, useTheme } from "@mui/material";
import Headers from "../../components/Headers";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geography } from "../../state/geography";
function Geography() {
  const { data, isLoading } = useGetGeographyQuery();
  const theme = useTheme();
  console.log("geography", data);
  return (
    <Box m="1.5rem 2.5rem">
      <Headers
        title="GEOGRAPHY"
        subtitle="Find where your users are located."
      />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {data ? (
          <>
            <ResponsiveChoropleth
              data={data}
              features={geography.features}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: theme.palette.secondary[200],
                    },
                  },
                  legend: {
                    text: {
                      fill: theme.palette.secondary[200],
                    },
                  },
                  ticks: {
                    line: {
                      stroke: theme.palette.secondary[200],
                      strokeWidth: 1,
                    },
                    text: {
                      fill: theme.palette.secondary[200],
                    },
                  },
                },
                legends: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                tooltip: {
                  container: {
                    color: theme.palette.primary.main,
                  },
                },
              }}
              margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
              domain={[0, 60]}
              unknownColor="#666666"
              label="properties.name"
              valueFormat=".2s"
              projectionScale={122}
              projectionTranslation={[0.45, 0.6]}
              projectionRotation={[0, 0, 0]}
              enableGraticule={true}
              graticuleLineColor="#dddddd"
              borderWidth={0.5}
              borderColor="#152538"
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -25,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: theme.palette.secondary[200],
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.background.alt,
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </>
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
}

export default Geography;
