"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { Facilitator } from "@/lib/data";

interface FacilitatorChartProps {
  facilitator: Facilitator;
}

export function FacilitatorChart({ facilitator }: FacilitatorChartProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chartData = facilitator.sparkline.map((value, index) => ({
    day: `Day ${index + 1}`,
    transactions: value,
  }));

  const isDark = mounted && resolvedTheme === "dark";
  const accentColor = isDark ? "#14B8A6" : "#0D9488";
  const mutedColor = isDark ? "#A1A1AA" : "#71717A";
  const tooltipBg = isDark ? "#18181B" : "#FAFAF9";
  const tooltipBorder = isDark ? "#27272A" : "#E5E5E3";

  return (
    <div className="w-full h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id={`facilitatorGradient-${mounted ? resolvedTheme : 'light'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accentColor} stopOpacity={0.4} />
              <stop offset="50%" stopColor={accentColor} stopOpacity={0.15} />
              <stop offset="100%" stopColor={accentColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: mutedColor, fontSize: 11 }}
            tickFormatter={(value) => {
              const day = parseInt(value.replace("Day ", ""));
              if (day === 1 || day === 15 || day === 30) {
                return `Day ${day}`;
              }
              return "";
            }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: mutedColor, fontSize: 11 }}
            tickFormatter={(value) => {
              if (value >= 1000) {
                return `${(value / 1000).toFixed(0)}K`;
              }
              return value.toString();
            }}
          />
          <Tooltip
            contentStyle={{
              background: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              borderRadius: "8px",
              fontSize: "13px",
              padding: "8px 12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.12)",
            }}
            labelStyle={{ color: mutedColor, marginBottom: "4px" }}
            formatter={(value) => [
              `${(value as number).toLocaleString()} transactions`,
              "",
            ]}
          />
          <Area
            type="monotone"
            dataKey="transactions"
            stroke={accentColor}
            strokeWidth={2}
            fill={`url(#facilitatorGradient-${mounted ? resolvedTheme : 'light'})`}
            animationDuration={800}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
