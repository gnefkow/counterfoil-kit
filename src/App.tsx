import React from "react"
import { Button, Card, Inline, Stack, Text } from "./components/primitives"
import { CheckboxField, InputField, RadioField, TextareaField } from "./components/form"
import { Plus, ArrowRight, Settings, Home, User, Mail, FileText } from "./icons"
import {
  Table,
  TableBody,
  TableCell,
  TableEmptyState,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "./components/data"
import { TabBar } from "./components/navigation/TabBar"

export default function App() {
  const [activeTab, setActiveTab] = React.useState<
    "typography" | "buttons" | "form" | "table"
  >("typography")

  const [radioValue, setRadioValue] = React.useState<"1" | "2" | "3" | "4">(
    "1",
  )

  const tableRows = [
    {
      id: "INV-1042",
      customer: "Northwind Traders",
      status: "Paid",
      owner: "K. Becker",
      createdAt: "2026-01-12",
      amount: 1280.5,
    },
    {
      id: "INV-1043",
      customer: "Acme Co.",
      status: "Open",
      owner: "A. Rivera",
      createdAt: "2026-01-14",
      amount: 349.0,
    },
    {
      id: "INV-1044",
      customer: "Stark Industries",
      status: "Overdue",
      owner: "S. Patel",
      createdAt: "2026-01-16",
      amount: 7920.12,
    },
    {
      id: "INV-1045",
      customer: "Wayne Enterprises",
      status: "Open",
      owner: "J. Chen",
      createdAt: "2026-01-18",
      amount: 164.99,
    },
    {
      id: "INV-1046",
      customer: "Globex",
      status: "Paid",
      owner: "M. Diaz",
      createdAt: "2026-01-21",
      amount: 980.0,
    },
  ]

  const totalAmount = tableRows.reduce((sum, row) => sum + row.amount, 0)

  return (
    <div className="min-h-screen bg-bg-primary p-8 font-ui">
      <Stack gap="xl">
        <TabBar
          tabs={[
            { id: "typography", label: "Typography", icon: <FileText size={16} />, iconPosition: "left" },
            { id: "buttons", label: "Buttons", icon: <Settings size={16} />, iconPosition: "left" },
            { id: "form", label: "Form Elements", icon: <User size={16} />, iconPosition: "right" },
            { id: "table", label: "Table", icon: <Mail size={16} />, iconPosition: "right" },
          ]}
          selectedId={activeTab}
          onSelect={(id) =>
            setActiveTab(id as "typography" | "buttons" | "form" | "table")
          }
        />

        {activeTab === "typography" ? (
          <Card>
            <Stack gap="lg">
              <Inline gap="xl" align="baseline">
                <Text size="h1" hierarchy="primary" weight="heavy">
                  H1 Heavy
                </Text>
                <Text size="h1" hierarchy="primary">
                  H1 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="h2" hierarchy="primary" weight="heavy">
                  H2 Heavy
                </Text>
                <Text size="h2" hierarchy="primary">
                  H2 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="h3" hierarchy="primary" weight="heavy">
                  H3 Heavy
                </Text>
                <Text size="h3" hierarchy="primary">
                  H3 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="h4" hierarchy="primary" weight="heavy">
                  H4 Heavy
                </Text>
                <Text size="h4" hierarchy="primary">
                  H4 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="h5" hierarchy="primary" weight="heavy">
                  H5 Heavy
                </Text>
                <Text size="h5" hierarchy="primary">
                  H5 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="h6" hierarchy="primary" weight="heavy">
                  H6 Heavy
                </Text>
                <Text size="h6" hierarchy="primary">
                  H6 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="body1" hierarchy="primary" weight="heavy">
                  Body 1 Heavy
                </Text>
                <Text size="body1" hierarchy="primary">
                  Body 1 Normal
                </Text>
              </Inline>
              <Inline gap="xl" align="baseline">
                <Text size="body2" hierarchy="primary" weight="heavy">
                  Body 2 Heavy
                </Text>
                <Text size="body2" hierarchy="primary">
                  Body 2 Normal
                </Text>
              </Inline>
            </Stack>
          </Card>
        ) : null}

        {activeTab === "buttons" ? (
          <Card>
            <Stack gap="xl">
              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Primary</h2>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>Primary</Button>
                    <Button variant="primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Primary (Disabled)
                    </Button>
                    <Button variant="primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} width="fill">
                      Primary (Fill)
                    </Button>
                    <Button variant="primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} width="fill" disabled>
                      Primary (Fill Disabled)
                    </Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Primary Sizes</h2>
                  <div className="flex gap-4 flex-wrap items-center">
                    <Button variant="primary" size="sm" leftIcon={<Plus size={14} />} rightIcon={<ArrowRight size={14} />}>small</Button>
                    <Button variant="primary" size="md" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>medium</Button>
                    <Button variant="primary" size="lg" leftIcon={<Plus size={18} />} rightIcon={<ArrowRight size={18} />}>large</Button>
                    <Button variant="primary" size="2xl" leftIcon={<Plus size={20} />} rightIcon={<ArrowRight size={20} />}>2xl</Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Secondary</h2>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="secondary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>Secondary</Button>
                    <Button variant="secondary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Secondary (Disabled)
                    </Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Tertiary</h2>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="tertiary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>Tertiary</Button>
                    <Button variant="tertiary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Tertiary (Disabled)
                    </Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Quaternary</h2>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="quaternary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>Quaternary</Button>
                    <Button variant="quaternary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Quaternary (Disabled)
                    </Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Destructive</h2>
                  <div className="flex gap-4 flex-wrap">
                    <Button variant="destructive-primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>Delete</Button>
                    <Button variant="destructive-primary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Delete (Disabled)
                    </Button>
                    <Button variant="destructive-secondary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />}>
                      Delete (Secondary)
                    </Button>
                    <Button variant="destructive-secondary" leftIcon={<Plus size={16} />} rightIcon={<ArrowRight size={16} />} disabled>
                      Delete (Secondary Disabled)
                    </Button>
                  </div>
                </Stack>
              </section>

              <section>
                <Stack gap="m">
                  <h2 className="text-h4 font-heavy text-text-primary">Icon Only</h2>
                  <div className="flex gap-4 flex-wrap items-center">
                    <Button variant="primary" size="sm" icon={<Settings size={14} />} aria-label="Settings" />
                    <Button variant="primary" size="md" icon={<Settings size={16} />} aria-label="Settings" />
                    <Button variant="primary" size="lg" icon={<Settings size={18} />} aria-label="Settings" />
                    <Button variant="primary" size="2xl" icon={<Settings size={20} />} aria-label="Settings" />
                  </div>
                </Stack>
              </section>
            </Stack>
          </Card>
        ) : null}

        {activeTab === "table" ? (
          <Card>
            <Stack gap="m">
              <h2 className="text-h4 font-heavy text-text-primary">Table</h2>

              <Table stickyHeader density="md" maxHeight={360}>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>Invoice</TableHeaderCell>
                    <TableHeaderCell>Customer</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Owner</TableHeaderCell>
                    <TableHeaderCell align="right">Amount</TableHeaderCell>
                    <TableHeaderCell align="right">Created</TableHeaderCell>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {tableRows.length === 0 ? (
                    <TableEmptyState
                      colSpan={6}
                      title="No invoices yet"
                      description="When you create invoices, they’ll show up here."
                      icon={<span>□</span>}
                    />
                  ) : (
                    tableRows.map((row, idx) => (
                      <TableRow
                        key={row.id}
                        interactive
                        selected={idx === 0}
                        onClick={() => {
                          // demo-only: no-op
                        }}
                      >
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.customer}</TableCell>
                        <TableCell>{row.status}</TableCell>
                        <TableCell>{row.owner}</TableCell>
                        <TableCell numeric>${row.amount.toFixed(2)}</TableCell>
                        <TableCell align="right">{row.createdAt}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>

                <TableFooter>
                  <TableRow>
                    <TableCell>Totals</TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell numeric>${totalAmount.toFixed(2)}</TableCell>
                    <TableCell />
                  </TableRow>
                </TableFooter>
              </Table>

              <Text size="body2" hierarchy="tertiary">
                Sticky header + scroll is enabled via <code>maxHeight</code>.
              </Text>
            </Stack>
          </Card>
        ) : null}

        {activeTab === "form" ? (
          <Stack gap="xl">
            <Card>
              <Stack gap="m">
                <h2 className="text-h4 font-heavy text-text-primary">Checkbox</h2>
                <Stack gap="sm">
                  <CheckboxField
                    label="Option 1"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <CheckboxField
                    label="Option 2"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <CheckboxField
                    label="Option 3"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <CheckboxField
                    label="Disabled, Unchecked"
                    description="This is what it looks like when someone is unable to check a checkbox"
                    icon={<span>◻︎</span>}
                    checked={false}
                    disabled
                  />
                  <CheckboxField
                    label="Disabled, Checked"
                    description="This is a checkbox that the user cannot uncheck"
                    icon={<span>◻︎</span>}
                    checked={true}
                    disabled
                  />
                </Stack>
              </Stack>
            </Card>

            <Card>
              <Stack gap="m">
                <h2 className="text-h4 font-heavy text-text-primary">Radio</h2>
                <Stack gap="sm">
                  <RadioField
                    name="demo-radio"
                    value="1"
                    checked={radioValue === "1"}
                    onChange={(isChecked, value) => {
                      if (isChecked && value)
                        setRadioValue(value as "1" | "2" | "3" | "4")
                    }}
                    label="Option 1"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <RadioField
                    name="demo-radio"
                    value="2"
                    checked={radioValue === "2"}
                    onChange={(isChecked, value) => {
                      if (isChecked && value)
                        setRadioValue(value as "1" | "2" | "3" | "4")
                    }}
                    label="Option 2"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <RadioField
                    name="demo-radio"
                    value="3"
                    checked={radioValue === "3"}
                    onChange={(isChecked, value) => {
                      if (isChecked && value)
                        setRadioValue(value as "1" | "2" | "3" | "4")
                    }}
                    label="Option 3"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <RadioField
                    name="demo-radio"
                    value="4"
                    checked={radioValue === "4"}
                    onChange={(isChecked, value) => {
                      if (isChecked && value)
                        setRadioValue(value as "1" | "2" | "3" | "4")
                    }}
                    label="Option 4"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                  <RadioField
                    name="demo-radio"
                    value="unselectable"
                    checked={false}
                    disabled
                    label="Unselectable Option"
                    description="This is what it looks like when someone is unable to select an option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                  />
                </Stack>
              </Stack>
            </Card>

            <Card>
              <Stack gap="m">
                <h2 className="text-h4 font-heavy text-text-primary">Input</h2>
                <Stack gap="sm">
                  <InputField
                    label="Email"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                    placeholder="name@example.com"
                  />
                  <InputField
                    label="Disabled"
                    description="This is what it looks like when someone is unable to type"
                    icon={<span>◻︎</span>}
                    placeholder="Disabled"
                    disabled
                  />
                  <InputField
                    label="With error"
                    description="This is a description of the option"
                    errorText="This is the error text for the option"
                    icon={<span>◻︎</span>}
                    placeholder="Type something"
                  />
                </Stack>
              </Stack>
            </Card>

            <Card>
              <Stack gap="m">
                <h2 className="text-h4 font-heavy text-text-primary">Textarea</h2>
                <Stack gap="sm">
                  <TextareaField
                    label="Notes"
                    description="This is a description of the option"
                    helpText="This is the helptext for the option"
                    icon={<span>◻︎</span>}
                    placeholder="Write something..."
                  />
                  <TextareaField
                    label="Disabled"
                    description="This is what it looks like when someone is unable to type"
                    icon={<span>◻︎</span>}
                    placeholder="Disabled"
                    disabled
                  />
                  <TextareaField
                    label="With error"
                    description="This is a description of the option"
                    errorText="This is the error text for the option"
                    icon={<span>◻︎</span>}
                    placeholder="Write something..."
                  />
                </Stack>
              </Stack>
            </Card>
          </Stack>
        ) : null}
      </Stack>
    </div>
  )
}
