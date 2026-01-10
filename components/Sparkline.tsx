"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SparklineProps {
  data: number[];
  width?: number | string;
  height?: number;
  showTooltip?: boolean;
}

export function Sparkline({
  data,
  width = 100,
  height = 32,
  showTooltip = true,
}: SparklineProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = data.map((value, index) => ({
    day: index + 1,
    value,
  }));

  const accentColor = mounted && resolvedTheme === "dark" ? "#14B8A6" : "#0D9488";
  const tooltipBg = mounted && resolvedTheme === "dark" ? "#18181B" : "#FAFAF9";
  const tooltipBorder = mounted && resolvedTheme === "dark" ? "#27272A" : "#E5E5E3";

  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={`sparklineGradient-${mounted ? resolvedTheme : 'light'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accentColor} stopOpacity={0.3} />
              <stop offset="100%" stopColor={accentColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          {showTooltip && (
            <Tooltip
              contentStyle={{
                background: tooltipBg,
                border: `1px solid ${tooltipBorder}`,
                borderRadius: "6px",
                fontSize: "12px",
                padding: "4px 8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ display: "none" }}
              formatter={(value) => [(value as number).toLocaleString(), ""]}
            />
          )}
          <Area
            type="monotone"
            dataKey="value"
            stroke={accentColor}
            strokeWidth={1.5}
            fill={`url(#sparklineGradient-${mounted ? resolvedTheme : 'light'})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
