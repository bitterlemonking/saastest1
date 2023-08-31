"use client";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@ui/components";
import { useTranslations } from "next-intl";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { useUser } from "@saas/auth/hooks";
import { apiClient } from "@shared/lib";
import { useToast } from "@ui/hooks";
import { ApiOutput } from "api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TeamRoleSelect } from "./TeamRoleSelect";

type TeamInvitations = ApiOutput["team"]["invitations"];

export function TeamInvitationsList({
  invitations,
}: {
  invitations: TeamInvitations;
}) {
  const t = useTranslations();
  const { toast } = useToast();
  const router = useRouter();
  const { teamRole } = useUser();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const revokeInvitationMutation =
    apiClient.team.revokeInvitation.useMutation();

  const columns: ColumnDef<TeamInvitations[number]>[] = [
    {
      accessorKey: "email",
      accessorFn: (row) => row.email,
      cell: ({ row }) => <div>{row.original.email}</div>,
    },
    {
      accessorKey: "actions",
      cell: ({ row }) => {
        return (
          <div className="flex flex-row justify-end gap-2">
            <TeamRoleSelect
              value={row.original.role}
              disabled
              onSelect={() => {}}
            />

            {teamRole === "OWNER" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <Icon.more />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onClick={() => {
                      const loadingToast = toast({
                        variant: "loading",
                        description: t(
                          "settings.team.members.notifications.revokeInvitation.loading.description",
                        ),
                      });
                      revokeInvitationMutation.mutate(
                        {
                          invitationId: row.original.id,
                        },
                        {
                          onSettled: () => {
                            loadingToast.dismiss();
                          },
                          onSuccess: () => {
                            toast({
                              variant: "success",
                              description: t(
                                "settings.team.members.notifications.revokeInvitation.success.description",
                              ),
                            });
                            router.refresh();
                          },
                          onError: () => {
                            toast({
                              variant: "error",
                              description: t(
                                "settings.team.members.notifications.revokeInvitation.error.description",
                              ),
                            });
                          },
                        },
                      );
                    }}
                  >
                    <Icon.undo className="mr-2 h-4 w-4" />
                    {t("settings.team.members.invitations.revoke")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data: invitations,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {t("settings.team.members.invitations.empty")}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
