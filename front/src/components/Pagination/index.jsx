import React from 'react'
import PaginationBootstrap from 'react-bootstrap/Pagination'

const PaginationShort = ({ activePage, maxPage, onChangePage }) => {
	return (
		<PaginationBootstrap>
			<PaginationBootstrap.Prev disabled={activePage === 1} onClick={() => onChangePage(activePage - 1)} />
			<PaginationBootstrap.Item active={activePage === 1} onClick={() => onChangePage(1)}>
				{1}
			</PaginationBootstrap.Item>
			<PaginationBootstrap.Item active={activePage === 2} onClick={() => onChangePage(2)}>
				{2}
			</PaginationBootstrap.Item>
			{maxPage > 2 && (
				<PaginationBootstrap.Item active={activePage === 3} onClick={() => onChangePage(3)}>
					{3}
				</PaginationBootstrap.Item>
			)}
			{maxPage > 3 && (
				<PaginationBootstrap.Item active={activePage === 4} onClick={() => onChangePage(4)}>
					{4}
				</PaginationBootstrap.Item>
			)}
			{maxPage > 4 && (
				<PaginationBootstrap.Item active={activePage === 5} onClick={() => onChangePage(5)}>
					{5}
				</PaginationBootstrap.Item>
			)}
			{maxPage > 5 && (
				<PaginationBootstrap.Item active={activePage === 6} onClick={() => onChangePage(6)}>
					{6}
				</PaginationBootstrap.Item>
			)}
			{maxPage > 6 && (
				<PaginationBootstrap.Item active={activePage === maxPage} onClick={() => onChangePage(maxPage)}>
					{maxPage}
				</PaginationBootstrap.Item>
			)}
			<PaginationBootstrap.Next disabled={activePage === maxPage} onClick={() => onChangePage(activePage + 1)} />
		</PaginationBootstrap>
	)
}

const PaginationLong = ({ activePage, maxPage, onChangePage }) => {
	return (
		<PaginationBootstrap>
			<PaginationBootstrap.Prev disabled={activePage === 1} onClick={() => onChangePage(activePage - 1)} />
			<PaginationBootstrap.Item active={activePage === 1} onClick={() => onChangePage(1)}>
				{1}
			</PaginationBootstrap.Item>
			{(activePage < 4 || activePage > maxPage - 3) && (
				<PaginationBootstrap.Item active={activePage === 2} onClick={() => onChangePage(2)}>
					{2}
				</PaginationBootstrap.Item>
			)}
			{activePage > 3 && <PaginationBootstrap.Ellipsis />}
			{activePage > 3 && activePage < maxPage - 2 && (
				<PaginationBootstrap.Item onClick={() => onChangePage(activePage - 1)}>
					{activePage - 1}
				</PaginationBootstrap.Item>
			)}
			{activePage > 3 && activePage < maxPage - 2 && (
				<PaginationBootstrap.Item active>{activePage}</PaginationBootstrap.Item>
			)}
			{activePage > 3 && activePage < maxPage - 2 && (
				<PaginationBootstrap.Item onClick={() => onChangePage(activePage + 1)}>
					{activePage + 1}
				</PaginationBootstrap.Item>
			)}
			{activePage < 4 && (
				<PaginationBootstrap.Item active={activePage === 3} onClick={() => onChangePage(3)}>
					{3}
				</PaginationBootstrap.Item>
			)}
			{activePage < 4 && (
				<PaginationBootstrap.Item active={activePage === 4} onClick={() => onChangePage(4)}>
					{4}
				</PaginationBootstrap.Item>
			)}
			{activePage < maxPage - 2 && <PaginationBootstrap.Ellipsis />}
			{activePage > maxPage - 3 && (
				<PaginationBootstrap.Item active={activePage === maxPage - 3} onClick={() => onChangePage(maxPage - 3)}>
					{maxPage - 3}
				</PaginationBootstrap.Item>
			)}
			{activePage > maxPage - 3 && (
				<PaginationBootstrap.Item active={activePage === maxPage - 2} onClick={() => onChangePage(maxPage - 2)}>
					{maxPage - 2}
				</PaginationBootstrap.Item>
			)}
			{((activePage > 0 && activePage < 4) || activePage > maxPage - 3) && (
				<PaginationBootstrap.Item active={activePage === maxPage - 1} onClick={() => onChangePage(maxPage - 1)}>
					{maxPage - 1}
				</PaginationBootstrap.Item>
			)}
			<PaginationBootstrap.Item active={activePage === maxPage} onClick={() => onChangePage(maxPage)}>
				{maxPage}
			</PaginationBootstrap.Item>
			<PaginationBootstrap.Next disabled={activePage === maxPage} onClick={() => onChangePage(activePage + 1)} />
		</PaginationBootstrap>
	)
}

const Pagination = (props) => {
	return props.maxPage > 1 ? props.maxPage < 8 ? <PaginationShort {...props} /> : <PaginationLong {...props} /> : null
}

export default Pagination
