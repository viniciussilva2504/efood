import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { cores } from '../../styles'
import { useAuth } from '../../contexts/AuthContext'
import { getReviews, addReview, Review } from '../../services/supabaseData'

const Container = styled.div`
  max-width: 1024px;
  margin: 32px auto;
  padding: 0 8px;
`

const Title = styled.h3`
  font-size: 18px;
  color: ${cores.rosa};
  margin-bottom: 16px;
`

const ReviewCard = styled.div`
  background: ${cores.branco};
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 4px;
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

const UserName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.rosa};
`

const Stars = styled.span`
  font-size: 14px;
`

const Comment = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
`

const DateText = styled.span`
  font-size: 11px;
  color: #999;
`

const FormContainer = styled.form`
  background: ${cores.bege};
  padding: 16px;
  margin-bottom: 24px;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  resize: vertical;
  min-height: 80px;
  margin-bottom: 8px;
`

const StarSelect = styled.div`
  margin-bottom: 8px;

  button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0 2px;
  }
`

const SubmitButton = styled.button`
  background: ${cores.rosa};
  color: ${cores.bege};
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const LoginHint = styled.p`
  font-size: 13px;
  color: #999;
  font-style: italic;
  margin-bottom: 16px;
`

type Props = {
  restaurantId: number
}

const ReviewList = ({ restaurantId }: Props): React.JSX.Element => {
  const { user } = useAuth()
  const [reviews, setReviews] = useState<Review[]>([])
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    getReviews(restaurantId).then(setReviews).catch(() => { /* ignore */ })
  }, [restaurantId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !comment.trim()) return

    setSubmitting(true)
    try {
      const userName = user.user_metadata?.name || user.email || 'Anónimo'
      const newReview = await addReview(user.id, userName, restaurantId, rating, comment.trim())
      setReviews([newReview, ...reviews])
      setComment('')
      setRating(5)
    } catch {
      // silently fail
    }
    setSubmitting(false)
  }

  const renderStars = (count: number) => '⭐'.repeat(count)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US')
  }

  return (
    <Container>
      <Title>Customer Reviews</Title>

      {user ? (
        <FormContainer onSubmit={handleSubmit}>
          <StarSelect>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
              >
                {star <= rating ? '⭐' : '☆'}
              </button>
            ))}
          </StarSelect>
          <TextArea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <SubmitButton type="submit" disabled={submitting || !comment.trim()}>
            {submitting ? 'Sending...' : 'Submit review'}
          </SubmitButton>
        </FormContainer>
      ) : (
        <LoginHint>Log in to leave a review</LoginHint>
      )}

      {reviews.length === 0 ? (
        <p style={{ color: '#999', fontSize: '14px' }}>No reviews yet</p>
      ) : (
        reviews.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <UserName>{review.user_name}</UserName>
              <Stars>{renderStars(review.rating)}</Stars>
            </ReviewHeader>
            <Comment>{review.comment}</Comment>
            <DateText>{formatDate(review.created_at)}</DateText>
          </ReviewCard>
        ))
      )}
    </Container>
  )
}

export default ReviewList
