import React from "react"
import { Inline } from "../primitives"
import { Tab } from "./Tab"

/* ======================================================
   Public API
   ====================================================== */

type TabBarProps = {
  tabs: {
    id: string
    label: string
    disabled?: boolean
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }[]
  selectedId: string
  size?: "sm" | "md" | "lg"
  onSelect: (id: string) => void
}

/* ======================================================
   Component
   ====================================================== */

/**
 * TabBar
 *
 * Container for navigation tabs.
 * Handles layout and selection wiring.
 */
export function TabBar({
  tabs,
  selectedId,
  size = "md",
  onSelect,
}: TabBarProps) {
  return (
    <div className="border-b border-[var(--border-secondary)]">
      <Inline gap="sm">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            selected={tab.id === selectedId}
            disabled={tab.disabled}
            size={size}
            icon={tab.icon}
            iconPosition={tab.iconPosition}
            leftIcon={tab.leftIcon}
            rightIcon={tab.rightIcon}
            onSelect={() => onSelect(tab.id)}
          />
        ))}
      </Inline>
    </div>
  )
}
