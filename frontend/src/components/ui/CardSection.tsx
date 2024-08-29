import { useState } from "react";
import { Card, Col, Row, Pagination } from "antd";

type CardID = string | null;

type TCard  ={
_id: string,
title: string,
description: string,
createdAt: string,
updatedAt: string
}

const CardSection = ({cards}: any) => {
  const [hoveredCard, setHoveredCard] = useState<CardID>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const handleMouseEnter = (id: string) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = cards?.slice(startIndex, endIndex);

  return (
    <div>
      <style>
        {`
          .card-section {
            padding: 40px 80px;
          }
          @media (min-width: 768px) {
            .card-section {
              padding: 60px 100px;
            }
          }
          @media (min-width: 992px) {
            .card-section {
              padding: 60px 180px;
            }
          }
        `}
      </style>
      <div className="card-section">
        <Row gutter={40}>
          {currentCards?.map((card: TCard) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              key={card._id}
              style={{ marginBottom: "30px" }}
            >
              <div
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  cursor: "pointer",
                  boxShadow: hoveredCard === card._id ? "0 6px 12px rgba(0, 0, 0, 0.2)" : "none",
                  transform: hoveredCard === card._id ? "translateY(-5px)" : "none",
                }}
                onMouseEnter={() => handleMouseEnter(card._id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card
                  title={
                    <div
                      style={{
                        borderBottom: "2px solid #ddd",
                        paddingBottom: "15px",
                      }}
                    >
                      {card.title}
                    </div>
                  }
                  
                >
                  <p>{card.description}</p>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination
          current={currentPage}
          pageSize={cardsPerPage}
          total={cards?.length || 0}
          onChange={handlePageChange}
          style={{ marginTop: "20px", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default CardSection;
